import { Column, Entity } from "typeorm";

@Entity("testbalanc", { schema: "public" })
export class Testbalanc {
  @Column("integer", { name: "id", nullable: true })
  id: number | null;

  @Column("integer", { name: "balance", nullable: true })
  balance: number | null;
}
