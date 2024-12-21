import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@techzealot/mini-shadcn-ui";

//!自定义css需在组件之后引入方能覆盖组件css否则无效
import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Button>Click me</Button>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>Ok</Button>
            <DialogClose asChild>
              <Button className="bg-red-400/70 hover:bg-red-900/90">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
