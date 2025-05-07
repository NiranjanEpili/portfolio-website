import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Niranjan Epili - AI/ML Engineer & Cybersecurity Expert';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f2e9dc',
          position: 'relative',
        }}
      >
        {/* Black strip on the left */}
        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '80px', backgroundColor: 'black' }} />
        
        <div style={{ marginLeft: '100px', display: 'flex', flexDirection: 'column', maxWidth: '80%' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ 
              backgroundColor: '#ff5722', 
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: '48px',
              padding: '10px 20px' 
            }}>
              NE_
            </div>
          </div>
          
          <h1 style={{ 
            fontSize: '64px', 
            fontWeight: 'bold', 
            color: '#000000', 
            margin: '0',
            marginBottom: '20px',
          }}>
            Niranjan Epili
          </h1>
          
          <h2 style={{ 
            fontSize: '32px', 
            color: '#ff5722', 
            margin: '0',
            marginBottom: '20px',
          }}>
            AI/ML Engineer | Cybersecurity Expert | Startup Founder
          </h2>
          
          <p style={{ fontSize: '24px', color: '#333' }}>
            Portfolio & Professional Works
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
