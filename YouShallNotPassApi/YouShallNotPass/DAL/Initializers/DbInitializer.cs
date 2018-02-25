using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YouShallNotPass.DAL.Initializers
{
	internal class DbInitializer: MigrateDatabaseToLatestVersion<ShallPassDBContext, YouShallNotPass.DAL.Migration.Configuration>
	{
	}
}
