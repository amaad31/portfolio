import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Amaad Ashraf Khan – Embedded & Cloud-Native Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(circle at 30% 20%, #0f2a1e 0%, #0a0d10 55%)',
          color: '#e9edef',
          fontFamily: 'monospace',
        }}
      >
        {/* Terminal prompt at the top */}
        <div style={{ display: 'flex', color: '#4ade80', fontSize: 28, fontFamily: 'monospace' }}>
          // portfolio
        </div>

        {/* Name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#f5f7f8',
            }}
          >
            Amaad Ashraf Khan
          </div>
          <div style={{ fontSize: 32, color: '#9aa4ad' }}>
            Embedded & Cloud · FAU Erlangen-Nürnberg
          </div>
          <div style={{ fontSize: 24, color: '#4ade80', marginTop: 8 }}>
            Kubernetes · k3s · STM32 · Edge Infrastructure
          </div>
        </div>

        {/* Footer: role */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#9aa4ad',
            borderTop: '1px solid #2a3138',
            paddingTop: 24,
          }}
        >
          <div style={{ display: 'flex' }}>Werkstudent @ Siemens Mobility</div>
          <div style={{ display: 'flex', color: '#4ade80' }}>amaad.dev</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
