export function stripHtmlTags(text: string) {
  return text
    .replace(/(\s+)|(&nbsp;)/g, ' ')
    .replace(/<\/p>/g, '\n\n')
    .replace(/<[^>]+>/g, '');
}
