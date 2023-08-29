export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-tv p-6">{children}</div>;
}
