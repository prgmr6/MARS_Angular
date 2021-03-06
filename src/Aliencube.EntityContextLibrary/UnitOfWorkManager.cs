﻿using Aliencube.EntityContextLibrary.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aliencube.EntityContextLibrary
{
    /// <summary>
    /// This represents the entity for unit of work manager.
    /// </summary>
    public class UnitOfWorkManager : IUnitOfWorkManager
    {
        private readonly IDbContextFactory _contextFactory;

        private bool _disposed;

        /// <summary>
        /// Initialises a new instance of the <see cref="UnitOfWorkManager"/> class.
        /// </summary>
        /// <param name="contextFactory"><see cref="IDbContextFactory"/> instance.</param>
        public UnitOfWorkManager(IDbContextFactory contextFactory)
        {
            if (contextFactory == null)
            {
                throw new ArgumentNullException(nameof(contextFactory));
            }

            this._contextFactory = contextFactory;
        }

        /// <summary>
        /// Gets the <see cref="DbContext"/> instance.
        /// </summary>
        /// <typeparam name="TContext">Type of database context inheriting the <see cref="DbContext"/> class.</typeparam>
        /// <returns>Returns the <see cref="DbContext"/> instance.</returns>
        public TContext GetDbContext<TContext>() where TContext : DbContext
        {
            return this._contextFactory.GetDbContext<TContext>();
        }

        /// <summary>
        /// Gets the <see cref="DbContext"/> instance.
        /// </summary>
        /// <param name="type">Type of database context inheriting the <see cref="DbContext"/> class.</param>
        /// <returns>Returns the <see cref="DbContext"/> instance.</returns>
        public DbContext GetDbContext(Type type)
        {
            return this._contextFactory.GetDbContext(type);
        }

        /// <summary>
        /// Gets the list of the <see cref="DbContext"/> instances.
        /// </summary>
        /// <param name="types">List of database context types.</param>
        /// <returns>Returns the list of the <see cref="DbContext"/> instances.</returns>
        public IEnumerable<DbContext> GetDbContexts(IEnumerable<Type> types)
        {
            return this._contextFactory.GetDbContexts(types);
        }

        /// <summary>
        /// Creates the <see cref="DbContext"/> instance with given type.
        /// </summary>
        /// <typeparam name="TContext">Database context type inheriting the <see cref="DbContext"/> class.</typeparam>
        /// <returns>Returns the <see cref="IUnitOfWork"/> instance.</returns>
        public IUnitOfWork CreateInstance<TContext>() where TContext : DbContext
        {
            var uow = new UnitOfWork<TContext>(this._contextFactory);
            return uow;
        }

        /// <summary>
        /// Creates the <see cref="DbContext"/> instance with given type.
        /// </summary>
        /// <param name="type">Database context type inheriting the <see cref="DbContext"/> class.</param>
        /// <returns>Returns the <see cref="IUnitOfWork"/> instance.</returns>
        public IUnitOfWork CreateInstance(Type type)
        {
            var uow = new UnitOfWork(this._contextFactory, type);
            return uow;
        }

        /// <summary>
        /// Creates the <see cref="DbContext"/> instance with given type.
        /// </summary>
        /// <param name="types">List of database context types inheriting the <see cref="DbContext"/> class.</param>
        /// <returns>Returns the <see cref="IUnitOfWork"/> instance.</returns>
        public IUnitOfWork CreateInstance(IEnumerable<Type> types)
        {
            var uow = new UnitOfWork(this._contextFactory, types);
            return uow;
        }

        /// <summary>
        /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        public void Dispose()
        {
            if (this._disposed)
            {
                return;
            }

            this._disposed = true;
        }
    }
}
