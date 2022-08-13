import { defineComponent, h } from "vue";
import ACButton from "./button/ACButton";

export default defineComponent({
  name: "App",
  render() {
    return (
      <div>
        <div>
          <ACButton class={`ml-3`} color="blue">
            蓝色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="green">
            绿色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="gray">
            灰色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="yellow">
            黄色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="red">
            红色按钮
          </ACButton>
        </div>
        <div class={`mt-3`}>
          <ACButton class={`ml-3`} color="blue" plain={true}>
            蓝色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="green" plain={true}>
            绿色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="gray" plain={true}>
            灰色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="yellow" plain={true}>
            黄色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="red" plain={true}>
            红色按钮
          </ACButton>
        </div>
        <div class={`mt-3`}>
          <ACButton class={`ml-3`} color="blue" plain={true} round={true}>
            蓝色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="green" plain={true} round={true}>
            绿色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="gray" plain={true} round={true}>
            灰色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="yellow" plain={true} round={true}>
            黄色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="red" plain={true} round={true}>
            红色按钮
          </ACButton>
        </div>
        <div class={`mt-3`}>
          <ACButton
            class={`ml-3`}
            color="blue"
            plain={true}
            round={true}
            size={"sm"}
          >
            蓝色按钮
          </ACButton>
          <ACButton
            class={`ml-3`}
            color="green"
            plain={true}
            round={true}
            size={"sm"}
          >
            绿色按钮
          </ACButton>
          <ACButton
            class={`ml-3`}
            color="gray"
            plain={true}
            round={true}
            size={"sm"}
          >
            灰色按钮
          </ACButton>
          <ACButton
            class={`ml-3`}
            color="yellow"
            plain={true}
            round={true}
            size={"sm"}
          >
            黄色按钮
          </ACButton>
          <ACButton
            class={`ml-3`}
            color="red"
            plain={true}
            round={true}
            size={"sm"}
          >
            红色按钮
          </ACButton>
        </div>
        <div class={`mt-3`}>
          <ACButton class={`ml-3`} color="blue" size="sm">
            蓝色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="green" size="sm">
            绿色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="gray" size="sm">
            灰色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="yellow" size="sm">
            黄色按钮
          </ACButton>
          <ACButton class={`ml-3`} color="red" size="sm">
            红色按钮
          </ACButton>
        </div>
        <div class={`mt-3`}>
          <ACButton
            class={`ml-3`}
            color="blue"
            plain
            size="sm"
            icon="edit"
          ></ACButton>
          <ACButton
            class={`ml-3`}
            color="green"
            plain
            size="sm"
            icon="search"
          ></ACButton>
          <ACButton
            class={`ml-3`}
            color="gray"
            plain
            size="sm"
            icon="share"
          ></ACButton>
          <ACButton
            class={`ml-3`}
            color="yellow"
            plain
            size="sm"
            icon="add"
          ></ACButton>
          <ACButton
            class={`ml-3`}
            color="red"
            plain
            size="sm"
            icon="delete"
          ></ACButton>
        </div>
      </div>
    );
  },
});
