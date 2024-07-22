import { bg_image } from "@/public/assets/images";
const Index = () => {
  return (
    <div style={{ backgroundImage: `url(${bg_image})` }} className="bg-no-repeat bg-cover bg-center h-screen">
      <h1>hello</h1>
    </div>
  );
}

export default Index;
