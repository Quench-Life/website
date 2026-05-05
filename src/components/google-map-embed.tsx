type GoogleMapEmbedProps = {
  address: string;
  title: string;
  className?: string;
};

export function GoogleMapEmbed({ address, title, className }: GoogleMapEmbedProps) {
  const encodedAddress = encodeURIComponent(address);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`
    : `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={className}
    />
  );
}
