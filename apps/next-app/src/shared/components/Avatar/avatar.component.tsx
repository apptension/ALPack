import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { SUPABASE_STORAGE } from 'constants/SUPABASE_STORAGE';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  width?: number;
  height?: number;
}

export const Avatar = ({ src, width = 42, height = 42 }: AvatarProps) => {
  const supabase = useSupabaseClient();
  // Check for http in case of Google OAuth avatar
  const avatarUrl = src.includes('http')
    ? src
    : supabase.storage.from(SUPABASE_STORAGE.AVATARS).getPublicUrl(src).data
        .publicUrl;

  return (
    <Image
      src={avatarUrl}
      width={width}
      height={height}
      className="rounded-lg"
      alt="User Avatar"
    />
  );
};
