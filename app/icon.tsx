import { ImageResponse } from 'next/image';

export const runtime = 'edge';

export const size = {
  width: 192,
  height: 192,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: '#ff5722',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'monospace'
        }}
      >
        NE_
      </div>
    ),
    {
      ...size,
    }
  );
}
