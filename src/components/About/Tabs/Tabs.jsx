import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "@/lib/Constant/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList variant="line" className="gap-6">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="px-0 text-gray-400 dark:text-gray-500
              data-active:text-white dark:data-active:text-black
              data-selected:text-white dark:data-selected:text-blck
              data-active:font-bold data-selected:font-bold
              hover:text-white dark:hover:text-black
              after:h-[3px] after:bottom-[-8px] after:rounded-full
              after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:hoverEffect after:origin-left after:scale-x-0 after:transition-transform 
              data-active:after:scale-x-100 data-selected:after:scale-x-100"
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="mt-6 text-left"
        >
          <ul
            className={`list-disc pl-5 space-y-2  ${
              tab.content.length > 3 ? "columns-3" : ""
            }`}
          >
            {tab.content.map((item, index) => (
              <li key={index} className="dark:text-black text-white">
                {item}
              </li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  );
}
