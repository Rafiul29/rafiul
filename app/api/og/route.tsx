import { ImageResponse } from 'next/og';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0f172a',
                    padding: '40px',
                }}
            >
                {/* Profile Image Section */}
                <div style={{ display: 'flex', marginRight: '60px' }}>
                    <img
                        src="https://rafiul-islam-dev.vercel.app/profile.png"
                        style={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            border: '4px solid #3b82f6',
                            objectFit: 'cover',
                        }}
                    />
                </div>

                {/* Content Section */}
                <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                    <h1 style={{ fontSize: '60px', margin: '0', fontWeight: 'bold' }}>
                        Md Rafiul Islam
                    </h1>
                    <p style={{ fontSize: '30px', color: '#94a3b8', margin: '10px 0' }}>
                        Full Stack Developer
                    </p>

                    {/* Icons placeholder (You can add SVG icons here) */}
                    <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                        {/* Icons as text/labels since SVG needs to be defined */}
                        <span style={{ fontSize: '20px', background: '#1e293b', padding: '5px 15px', borderRadius: '20px' }}>FB</span>
                        <span style={{ fontSize: '20px', background: '#1e293b', padding: '5px 15px', borderRadius: '20px' }}>WA</span>
                        <span style={{ fontSize: '20px', background: '#1e293b', padding: '5px 15px', borderRadius: '20px' }}>GitHub</span>
                        <span style={{ fontSize: '20px', background: '#1e293b', padding: '5px 15px', borderRadius: '20px' }}>LinkedIn</span>
                    </div>

                    <p style={{ fontSize: '24px', marginTop: '40px', color: '#3b82f6' }}>
                        rafiulislamcse29@gmail.com
                    </p>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}