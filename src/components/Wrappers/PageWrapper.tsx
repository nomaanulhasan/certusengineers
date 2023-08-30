export default function PageWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-396px)] flex-col">
      <div className="w-full bg-[url('/images/universe_bg.jpg')] bg-cover bg-no-repeat">
        <div
          className="
            m-auto flex h-48 w-full max-w-tv items-center justify-center p-6 text-4xl
            font-semibold text-white transition-all duration-300 sm:text-5xl lg:justify-start
          "
        >
          {title}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
