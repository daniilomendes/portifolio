import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

const IntroductionArea = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        <div className="text-justify ">
          <p className="pb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            autem optio dolorum, excepturi rem quidem nobis voluptatem,
            exercitationem nesciunt voluptas, itaque libero voluptate. Vero
            consequuntur blanditiis aliquam dicta vitae doloremque? Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Voluptatem nihil libero
            quod officia. Vitae sapiente, suscipit expedita odio voluptatem
            illum deleniti numquam iure repellat aperiam enim placeat ex, harum
            dignissimos.
          </p>
          <Separator />
          <p className="pt-3 pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            repellendus doloribus necessitatibus culpa? Nam doloremque vel ex
            atque pariatur, ducimus aperiam facilis? Doloribus blanditiis
            eligendi vitae in et itaque non?
          </p>
          <Separator />
          <p className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            repellendus doloribus necessitatibus culpa? Nam doloremque vel ex
            atque pariatur, ducimus aperiam facilis? Doloribus blanditiis
            eligendi vitae in et itaque non?
          </p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default IntroductionArea;
