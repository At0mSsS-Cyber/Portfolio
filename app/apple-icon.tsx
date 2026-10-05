import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/**
 * Apple touch icon: the AT monogram on the brand gradient (PNG twin of app/icon.svg).
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
        }}
      >
        <svg width="124" height="62" viewBox="0 0 200 100" fill="#ffffff">
          <path d="M 0 100 L 38 0 L 62 0 L 100 100 L 76 100 L 50 30 L 24 100 Z" />
          <path d="M 37.4 64 L 62.6 64 L 67.8 78 L 32.2 78 Z" />
          <path d="M 104 0 L 200 0 L 200 22 L 166 22 L 166 100 L 142 100 L 142 22 L 112 22 Z" />
        </svg>
      </div>
    ),
    size
  );
}
