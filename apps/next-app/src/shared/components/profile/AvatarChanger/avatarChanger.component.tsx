import { useMutation } from '@apollo/client';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { UPDATE_AVATAR } from 'shared/queries/index.graphql';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { Button } from 'shared/components/Button';
import { Spinner } from 'shared/components/Spinner';
import { Avatar } from 'shared/components/Avatar';

interface AvatarChangerProps {
  profileAvatarSrc?: string | null;
}

export const AvatarChanger = ({ profileAvatarSrc }: AvatarChangerProps) => {
  const [updateAvatar, { loading }] = useMutation(UPDATE_AVATAR);
  const supabase = useSupabaseClient();
  const fileRef = useRef<HTMLInputElement>(null);

  const [avatarSrc, setAvatarSrc] = useState(profileAvatarSrc || '');

  const downloadAvatar = useCallback(
    (url: string) => {
      const { data } = supabase.storage.from('avatars').getPublicUrl(url);
      setAvatarSrc(data.publicUrl);
    },
    [supabase.storage]
  );

  const handleAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const file = event.target.files[0];
      const getFileData = (file: File) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
        return { filePath };
      };
      const { filePath } = getFileData(file);

      const { data } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      downloadAvatar(data?.path || '');
      updateAvatar({ variables: { input: { avatar_url: filePath } } });
    }
  };

  const handleClick = () => {
    fileRef.current?.click();
  };

  return (
    <div className="relative mb-14">
      <input
        ref={fileRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleAvatarChange}
      />
      {loading ? (
        <Spinner />
      ) : (
        avatarSrc && <Avatar src={avatarSrc} width={82} height={82} />
      )}
      <Button
        className="absolute py-1 px-1 text-sm font-thin -bottom-3 -right-7"
        onClick={handleClick}
      >
        Upload
      </Button>
    </div>
  );
};
