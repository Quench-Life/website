declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.PNG" {
  const src: import("next/image").StaticImageData;
  export default src;
}
