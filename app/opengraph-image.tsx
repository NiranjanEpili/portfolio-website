import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Niranjan Epili - AI/ML Engineer & Cybersecurity Expert';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default async function OgImage() {
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
        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '80px', backgroundColor: '#000' }} />
        
        {/* Main content area */}
        <div style={{ marginLeft: '100px', display: 'flex', flexDirection: 'column', maxWidth: '80%' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ 
              backgroundColor: '#ff5722', 
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: '48px',
              padding: '10px 20px',
              borderRadius: '4px'
            }}>
              NE_
            </div>
          </div>
          
          {/* Name */}
          <h1 style={{ 
            fontSize: '64px', 
            fontWeight: 'bold', 
            color: '#000000', 
            margin: '0',
            marginBottom: '20px',
            fontFamily: 'monospace, Courier New, Courier'
          }}>
            Niranjan Epili
          </h1>
          
          {/* Title */}
          <h2 style={{ 
            fontSize: '32px', 
            color: '#ff5722', 
            margin: '0',
            marginBottom: '20px',
            fontFamily: 'monospace, Courier New, Courier'
          }}>
            AI/ML Engineer | Cybersecurity Expert | Startup Founder
          </h2>
          
          {/* Tagline */}
          <p style={{ 
            fontSize: '24px', 
            color: '#333', 
            fontFamily: 'monospace, Courier New, Courier' 
          }}>
            Portfolio & Professional Works
          </p>
          
          {/* Social links represented as pills */}
          <div style={{ 
            display: 'flex', 
            gap: '10px',
            marginTop: '30px' 
          }}>
            <div style={{ 
              padding: '8px 16px', 
              backgroundColor: '#000', 
              color: '#fff', 
              borderRadius: '999px',
              fontSize: '18px',
              fontFamily: 'monospace, Courier New, Courier'
            }}>
              GitHub
            </div>
            <div style={{ 
              padding: '8px 16px', 
              backgroundColor: '#0077b5', 
              color: '#fff', 
              borderRadius: '999px',
              fontSize: '18px',
              fontFamily: 'monospace, Courier New, Courier'
            }}>
              LinkedIn
            </div>
            <div style={{ 
              padding: '8px 16px', 
              backgroundColor: '#ff0000', 
              color: '#fff', 
              borderRadius: '999px',
              fontSize: '18px',
              fontFamily: 'monospace, Courier New, Courier'
            }}>
              YouTube
            </div>
          </div>
          
          {/* Domain name */}
          <div style={{ 
            position: 'absolute', 
            bottom: '30px', 
            right: '40px',
            fontSize: '20px',
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
