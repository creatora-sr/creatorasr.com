// Shared Formspree helper — every client-facing form sends its info here.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mljdznya";

/**
 * Send form data to the official CREATORA S.R Formspree inbox.
 * Never throws — returns true/false so the UI never breaks.
 * @example sendToFormspree({ name, email, message })
 */
export async function sendToFormspree(
  payload: Record<string, unknown>
): Promise<boolean> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return false;
    const data = await res.json().catch(() => ({} as { ok?: boolean }));
    return data?.ok !== false;
  } catch {
    return false;
  }
}
