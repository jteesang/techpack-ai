export async function handler(req: Request) {
    const { name } = new URL(req.url).searchParams;
    return new Response(JSON.stringify({ message: `Hello, ${name || 'World'}!` }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
