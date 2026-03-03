const ORG = "PayAINetwork";

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/orgs/${ORG}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return Response.json({ followers: null }, { status: 502 });
    }

    const data = await res.json();

    return Response.json({ followers: data.followers });
  } catch {
    return Response.json({ followers: null }, { status: 502 });
  }
}
