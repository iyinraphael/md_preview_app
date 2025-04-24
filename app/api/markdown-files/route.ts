import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const markdownDir = path.join(process.cwd(), 'markdowns');
  console.log('[DEBUG] Looking for files in:', markdownDir);

  if (!fs.existsSync(markdownDir)) {
    console.log('[DEBUG] Directory not found.');
    return NextResponse.json([], { status: 200 });
  }

  const files = fs.readdirSync(markdownDir);
  console.log('[DEBUG] Found files:', files);

  const markdownFiles = files.filter(file => file.endsWith('.md'));
  console.log('[DEBUG] Markdown files:', markdownFiles);

  const fileContents = markdownFiles.map(file => {
    const content = fs.readFileSync(path.join(markdownDir, file), 'utf-8');
    return { name: file, content };
  });

  return NextResponse.json(fileContents);
}