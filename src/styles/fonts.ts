import localFont from 'next/font/local'

export const fontLogo = localFont({
  src: [
    { path: '../../public/fonts/genos/Genos-Thin.ttf', weight: '100' },
    { path: '../../public/fonts/genos/Genos-ExtraLight.ttf', weight: '200' },
    { path: '../../public/fonts/genos/Genos-Light.ttf', weight: '300' },
    { path: '../../public/fonts/genos/Genos-Regular.ttf', weight: '400' },
    { path: '../../public/fonts/genos/Genos-Medium.ttf', weight: '500' },
    { path: '../../public/fonts/genos/Genos-SemiBold.ttf', weight: '600' },
    { path: '../../public/fonts/genos/Genos-Bold.ttf', weight: '700' },
    { path: '../../public/fonts/genos/Genos-ExtraBold.ttf', weight: '800' },
    { path: '../../public/fonts/genos/Genos-Black.ttf', weight: '900' },
  ],
  variable: '--font-logo',
  display: 'swap',
})

export const fontSans = localFont({
  src: [
    { path: '../../public/fonts/inter/Inter-Thin.ttf', weight: '100' },
    { path: '../../public/fonts/inter/Inter-ExtraLight.ttf', weight: '200' },
    { path: '../../public/fonts/inter/Inter-Light.ttf', weight: '300' },
    { path: '../../public/fonts/inter/Inter-Regular.ttf', weight: '400' },
    { path: '../../public/fonts/inter/Inter-Medium.ttf', weight: '500' },
    { path: '../../public/fonts/inter/Inter-SemiBold.ttf', weight: '600' },
    { path: '../../public/fonts/inter/Inter-Bold.ttf', weight: '700' },
    { path: '../../public/fonts/inter/Inter-ExtraBold.ttf', weight: '800' },
    { path: '../../public/fonts/inter/Inter-Black.ttf', weight: '900' },
  ],
  variable: '--font-sans',
  display: 'swap',
})
