using Msde.Mars.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Data.EntityFramework
{
    public class EntityFrameworkService : IDataRepository, IDisposable
    {
        AngularDatabase _connection;

        /// <summary>
        /// Database Context
        /// </summary>
        public AngularDatabase dbConnection
        {
            get { return _connection; }
        }


        public void BeginTransaction()
        {
            throw new NotImplementedException();
        }

        public void CloseSession()
        {
            throw new NotImplementedException();
        }

        public void CommitTransaction(bool closeSession)
        {
            dbConnection.SaveChanges();
        }

        public void CreateSession()
        {
            _connection = new AngularDatabase();
        }

        public void Dispose()
        {
            if (_connection != null)
                _connection.Dispose();
        }

        public void RollbackTransaction(bool closeSession)
        {

        }
    }
}
