import type { VFC } from "react";
import { useGetStripeMaterials } from "src/hooks/useGetStripeMaterials";

import { MaterialsList } from "./MaterialsList";

type Props = {
  time: number;
  handleAddinCart: (id: string, image: string) => void;
};

export const Products: VFC<Props> = (props) => {
  const { data: materials, isError, isLoading } = useGetStripeMaterials();
  if (isError) return <div>error</div>;
  if (isLoading) return <div>Loding...</div>;
  if (materials === undefined) return <div>Data isNothing...</div>;

  return (
    <div>
      {materials.products.map((item) => {
        return (
          <MaterialsList
            time={props.time}
            key={item.id}
            id={item.id}
            name={item.name}
            images={item.images}
            onClick={props.handleAddinCart}
          />
        );
      })}{" "}
    </div>
  );
};
