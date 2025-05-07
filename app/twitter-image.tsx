import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Niranjan Epili - AI/ML Engineer & Cybersecurity Expert';
export const contentType = 'image/png';
export const size = { width: 1200, height: 600 };

export default async function TwitterImage() {
  // No font loading needed when using system fonts

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
        {/* Left accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '60px', backgroundColor: '#000' }} />
        
        {/* Main content area */}
        <div style={{ marginLeft: '80px', display: 'flex', flexDirection: 'column', maxWidth: '85%' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ 
              backgroundColor: '#ff5722', 
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: '40px',
              padding: '8px 16px',
              borderRadius: '4px'
            }}>
              NE_
            </div>
          </div>
          
          {/* Name */}
          <h1 style={{ 
            fontSize: '56px', 
            fontWeight: 'bold', 
            color: '#000000', 
            margin: '0',
            marginBottom: '16px',
            fontFamily: 'monospace, Courier New, Courier'
          }}>
            Niranjan Epili
          </h1>
          
          {/* Title */}
          <h2 style={{ 
            fontSize: '28px', 
            color: '#ff5722', 
            margin: '0',
            marginBottom: '16px',
            fontFamily: 'monospace, Courier New, Courier'
          }}>
            AI/ML Engineer | Cybersecurity Expert
          </h2>
          
          {/* Domain name */}
          <div style={{ 
            position: 'absolute', 
            bottom: '20px', 
            right: '30px',
            fontSize: '18px',
            color: '#555',
            fontFamily: 'monospace, Courier New, Courier',
            fontWeight: 'bold'
          }}>
            www.niranjanepili.me
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      // No custom fonts needed
    }
  );
}
