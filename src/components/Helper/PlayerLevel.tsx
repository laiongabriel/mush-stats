function PlayerLevel({ format }: { format: string }) {
   const colorCodes: { [key: string]: string } = {
      "&0": "#000000",
      "&1": "#0000AA",
      "&2": "#00AA00",
      "&3": "#00AAAA",
      "&4": "#AA0000",
      "&5": "#AA00AA",
      "&6": "#FFAA00",
      "&7": "#AAAAAA",
      "&8": "#555555",
      "&9": "#5555FF",
      "&a": "#55FF55",
      "&b": "#55FFFF",
      "&c": "#FF5555",
      "&d": "#FF55FF",
      "&e": "#FFFF55",
      "&f": "#FFFFFF",
      "&r": "#FFFFFF",
   };

   const htmlString =
      format
         .replace(/&[0-9a-f]/g, (match) => {
            const color = colorCodes[match];
            return `<span style="color:${color}; font-size: 1.1rem;">`;
         })
         .replace(/&l/g, "")
         .replace(/&r/g, "</span>")
         .replace(/<\/span>(?!<span style="color:)/g, "") +
      "</span>".repeat((format.match(/&[0-9a-f]/g) || []).length);

   return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export default PlayerLevel;
