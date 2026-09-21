const basePath = "/masterfix-studio-test";

export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("blob:")
  ) {
    return src;
  }
  if (src.startsWith(basePath)) return src;
  return `${basePath}${src.startsWith("/") ? src : `/${src}`}`;
}
