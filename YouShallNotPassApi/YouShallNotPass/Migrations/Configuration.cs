using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using YouShallNotPass.DAL;

namespace YouShallNotPass.DAL.Migration
{

    internal sealed class Configuration : DbMigrationsConfiguration<ShallPassDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ShallPassDBContext context)
        {
            base.Seed(context);

        }
    }
}
