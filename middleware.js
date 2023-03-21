import {
    rewrite
} from '@vercel/edge';

export const config = {
    // Only run the middleware on the home route
    matcher: '/channel/:path*',
};

export default function middleware(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/channel')) {
        return rewrite(new URL('/index.html', request.url));
    }

    return Response.redirect(url)
}