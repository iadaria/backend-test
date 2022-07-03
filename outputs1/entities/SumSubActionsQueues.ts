import {Column,Entity,Index,PrimaryGeneratedColumn} from "typeorm";


@Index("SumSubActionsQueues_pkey",["id",],{ unique:true })
@Entity("SumSubActionsQueues" ,{schema:"public" } )
export  class SumSubActionsQueues {

@PrimaryGeneratedColumn({ type:"integer", name:"id" })
id:number;

@Column("enum",{ name:"domain",enum:["applicationServer","p2p"],default: () => "'applicationServer'"enum_SumSubActionsQueues_domain"", })
domain:"applicationServer" | "p2p";

@Column("integer",{ name:"sum_sub_action_id",nullable:true })
sumSubActionId:number | null;

@Column("integer",{ name:"kyc_log_id",nullable:true })
kycLogId:number | null;

@Column("integer",{ name:"user_id",nullable:true })
userId:number | null;

@Column("enum",{ name:"status",enum:["pending","processed"],default: () => "'pending'"enum_SumSubActionsQueues_status"", })
status:"pending" | "processed";

@Column("timestamp with time zone",{ name:"createdAt" })
createdAt:Date;

@Column("timestamp with time zone",{ name:"updatedAt" })
updatedAt:Date;

}
