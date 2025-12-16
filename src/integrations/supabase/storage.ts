import { supabase } from './client';

const BUCKET_NAME = 'images_bucket';

export async function uploadImage(file: File, path: string): Promise<string | null> {
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (error) {
    console.error('Erro ao fazer upload:', error.message);
    return null;
  }

  return getPublicUrl(data.path);
}

export function getPublicUrl(path: string): string {
  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(path);

  return data.publicUrl;
}

export async function deleteImage(path: string): Promise<boolean> {
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .remove([path]);

  if (error) {
    console.error('Erro ao deletar:', error.message);
    return false;
  }

  return true;
}

export async function listImages(folder?: string): Promise<string[]> {
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .list(folder || '', {
      limit: 100,
      sortBy: { column: 'created_at', order: 'desc' }
    });

  if (error) {
    console.error('Erro ao listar imagens:', error.message);
    return [];
  }

  return data
    .filter(item => item.name !== '.emptyFolderPlaceholder')
    .map(item => getPublicUrl(folder ? `${folder}/${item.name}` : item.name));
}
