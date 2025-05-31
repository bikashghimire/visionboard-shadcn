import AppBarChart from "@/components/AppBarChart";

const HomePage = () => {
  return (
    <div className="grid grid cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-1 2xl:col-span-2" ><AppBarChart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Text</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Text</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Text</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-1 2xl:col-span-2">Text</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Text</div>
    </div>
  );
}
export default HomePage