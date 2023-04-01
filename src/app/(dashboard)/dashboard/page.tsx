import { FC } from 'react';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { authOptions } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Similarity API | Dashboard',
  description: 'Free & Open Source Similarity API',
};

const page = async ({}) => {
  const user = getServerSession(authOptions);

  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id },
  });

  return <div>page</div>;
};

export default page;
