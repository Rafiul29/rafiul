import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    const icons = {
        github: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
        messenger: "M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.304 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0z",
        facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
        whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408.001 12.045a11.871 11.871 0 001.583 5.93L0 24l6.135-1.61a11.803 11.803 0 005.912 1.577h.005c6.637 0 12.048-5.409 12.051-12.047a11.81 11.81 0 00-3.536-8.509"
    };

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
                    backgroundColor: '#020617',
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #020617 100%)',
                    padding: '40px',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    {/* Portrait */}
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            display: 'flex',
                            padding: '6px',
                            background: 'linear-gradient(to bottom right, #3b82f6, #a855f7)',
                            borderRadius: '50%',
                        }}>
                            <img
                                src="https://rafiul-islam-dev.vercel.app/profile.png"
                                style={{
                                    width: '260px',
                                    height: '260px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px' }}>
                        <h1 style={{ fontSize: '64px', margin: '0', fontWeight: '900', color: 'white', letterSpacing: '-0.02em', fontFamily: 'sans-serif' }}>
                            Md Rafiul Islam
                        </h1>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                            <div style={{ height: '3px', width: '35px', backgroundColor: '#3b82f6', marginRight: '12px' }}></div>
                            <p style={{ fontSize: '28px', color: '#94a3b8', margin: '0', fontWeight: '500', fontFamily: 'sans-serif' }}>
                                Full Stack Developer
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '12px', marginTop: '25px' }}>
                            {Object.entries(icons).map(([name, path]) => (
                                <div key={name} style={{ display: 'flex', backgroundColor: 'rgba(30, 41, 59, 0.7)', padding: '10px', borderRadius: '10px', border: '1px solid rgba(51, 65, 85, 0.5)' }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#3b82f6">
                                        <path d={path} />
                                    </svg>
                                </div>
                            ))}
                        </div>

                        {/* Contact Info Row */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '25px' }}>
                            {/* Email */}
                            <div style={{ display: 'flex', marginBottom: '10px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px' }}>
                                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                                    rafiulislamcse29@gmail.com
                                </span>
                            </div>

                            {/* Phone Number */}
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px' }}>
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                                    +880 1571 257677
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}