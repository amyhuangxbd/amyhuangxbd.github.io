import AvatarImg from '@/public/hebe.png';
import clsx from 'clsx';
import Image from 'next/image';

export default function OpenAvatar({
  className
}: {
  className?: string;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
      <Image src={AvatarImg} alt='avatar image'
        className={clsx('transition-all ease-in-out hover:scale-110 w-full h-full object-cover rounded-md', className)}
      />
    </div>
  );
}
