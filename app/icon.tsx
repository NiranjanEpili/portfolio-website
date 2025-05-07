import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = { width: 32, height: 32 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#ff5722',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '0', // Square shape for a modern look
          fontFamily: 'system-ui, sans-serif', // Using a bolder system font
        }}
      >
        NE_
      </div>
    ),
    { ...size }
  );
}
