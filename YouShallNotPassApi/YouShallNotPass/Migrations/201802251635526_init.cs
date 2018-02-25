namespace YouShallNotPass.DAL.Migration
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.User",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        email = c.String(),
                        first_name = c.String(),
                        last_name = c.String(),
                        time = c.Int(nullable: false),
                        attempts = c.Int(nullable: false),
                        secrets = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.User");
        }
    }
}
