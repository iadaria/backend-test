import { Column, Entity } from "typeorm";

@Entity("loan", { schema: "public" })
export class Loan {
  @Column("text", { name: "loanno", nullable: true })
  loanno: string | null;

  @Column("text", { name: "branch", nullable: true })
  branch: string | null;

  @Column("integer", { name: "amount", nullable: true })
  amount: number | null;
}
