export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border bg-background text-center">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} ANTONY SYENGO. BUILT WITH <span className="text-red-500">♥</span> IN NAIROBI.
      </p>
      <p className="text-[10px] text-muted-foreground mt-2 opacity-50">
        "I'm gonna be King of the Data Scientists!"
      </p>
    </footer>
  );
}