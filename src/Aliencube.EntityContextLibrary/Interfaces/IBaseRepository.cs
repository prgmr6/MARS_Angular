using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Aliencube.EntityContextLibrary.Interfaces
{
    public interface IBaseRepository<TEntity>: IDisposable where TEntity:class
    {
        DbContext Context { get; }

        //
        // Summary:
        //     Adds the new entity.
        //
        // Parameters:
        //   entity:
        //     Entity instance to add.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void Add(TEntity entity, bool save = true);
        //
        // Summary:
        //     Adds the new entity asynchronously.
        //
        // Parameters:
        //   entity:
        //     Entity instance to add.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void AddAsync(TEntity entity, bool save = true);
        //
        // Summary:
        //     Adds or updates entity.
        //
        // Parameters:
        //   entity:
        //     Entity instance to update.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void AddOrUpdate(TEntity entity, bool save = true);
        //
        // Summary:
        //     Adds or updates entity asynchronously.
        //
        // Parameters:
        //   entity:
        //     Entity instance to update.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void AddOrUpdateAsync(TEntity entity, bool save = true);
        //
        // Summary:
        //     Adds or updates the existing list of entities.
        //
        // Parameters:
        //   entities:
        //     List of entity instances to update.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void AddOrUpdateRange(IEnumerable<TEntity> entities, bool save = true);
        //
        // Summary:
        //     Adds or updates the existing list of entities asynchronously.
        //
        // Parameters:
        //   entities:
        //     List of entity instances to update.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void AddOrUpdateRangeAsync(IEnumerable<TEntity> entities, bool save = true);
        //
        // Summary:
        //     Adds the new list of entities.
        //
        // Parameters:
        //   entities:
        //     List of entity instances to add.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void AddRange(IEnumerable<TEntity> entities, bool save = true);
        //
        // Summary:
        //     Adds the new list of entities asynchronously.
        //
        // Parameters:
        //   entities:
        //     List of entity instances to add.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void AddRangeAsync(IEnumerable<TEntity> entities, bool save = true);
        //
        // Summary:
        //     Deletes the entity from the DB set.
        //
        // Parameters:
        //   entity:
        //     Entity instance to delete.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void Delete(TEntity entity, bool save = true);
        //
        // Summary:
        //     Deletes the entity corresponding to the entityId fro the DB set.
        //
        // Parameters:
        //   entityId:
        //     EntityId as a primary key.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void Delete(object entityId, bool save = true);
        //
        // Summary:
        //     Deletes the entity from the DB set asynchronously.
        //
        // Parameters:
        //   entity:
        //     Entity instance to delete.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void DeleteAsync(TEntity entity, bool save = true);
        //
        // Summary:
        //     Deletes the entity corresponding to the entityId fro the DB set asynchronously.
        //
        // Parameters:
        //   entityId:
        //     EntityId as a primary key.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void DeleteAsync(object entityId, bool save = true);
        //
        // Summary:
        //     Deletes the list of entities corresponding to the entityIds fro the DB set.
        //
        // Parameters:
        //   entityIds:
        //     List of entityIds as primary keys.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void DeleteRange(IEnumerable<object> entityIds, bool save = true);
        //
        // Summary:
        //     Deletes the list of entities from the DB set.
        //
        // Parameters:
        //   entities:
        //     List of entity instances to delete.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void DeleteRange(IEnumerable<TEntity> entities, bool save = true);
        //
        // Summary:
        //     Deletes the list of entities corresponding to the entityIds fro the DB set asynchronously.
        //
        // Parameters:
        //   entityIds:
        //     List of entityIds as primary keys.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void DeleteRangeAsync(IEnumerable<object> entityIds, bool save = true);
        //
        // Summary:
        //     Deletes the list of entities from the DB set asynchronously.
        //
        // Parameters:
        //   entities:
        //     List of entity instances to delete.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void DeleteRangeAsync(IEnumerable<TEntity> entities, bool save = true);
        //
        // Summary:
        //     Execute stored precedure or direct SQL. This is mainly for the INSERT, UPDATE
        //     or DELETE statements.
        //
        // Parameters:
        //   commandText:
        //     Query to run a stored procedure.
        //
        //   input:
        //     Input value.
        //
        // Returns:
        //     Returns the number of rows affected.
        //
        // Remarks:
        //     Make sure that this might return -1, if the stored procedure contains the SET
        //     NOCOUNT ON statement.
        int ExecuteStoreCommand(string commandText, object input);
        //
        // Summary:
        //     Execute stored precedure or direct SQL asynchronously. This is mainly for the
        //     INSERT, UPDATE or DELETE statements.
        //
        // Parameters:
        //   commandText:
        //     Query to run a stored procedure.
        //
        //   input:
        //     Input value.
        //
        // Returns:
        //     Returns the number of rows affected.
        //
        // Remarks:
        //     Make sure that this might return -1, if the stored procedure contains the SET
        //     NOCOUNT ON statement.
        Task<int> ExecuteStoreCommandAsync(string commandText, object input);
        //
        // Summary:
        //     Execute stored precedure or direct SQL. This is mainly for the SELECT statements.
        //
        // Parameters:
        //   commandText:
        //     Query to run a stored procedure.
        //
        //   input:
        //     Input value.
        //
        // Type parameters:
        //   TOutput:
        //     Output type parameter.
        //
        // Returns:
        //     Returns the list of TOutput objects.
        IEnumerable<TOutput> ExecuteStoreQuery<TOutput>(string commandText, object input);
        //
        // Summary:
        //     Execute stored precedure or direct SQL asynchronously. This is mainly for the
        //     SELECT statements.
        //
        // Parameters:
        //   commandText:
        //     Query to run a stored procedure.
        //
        //   input:
        //     Input value.
        //
        // Type parameters:
        //   TOutput:
        //     Output type parameter.
        //
        // Returns:
        //     Returns the list of TOutput objects.
        Task<IEnumerable<TOutput>> ExecuteStoreQueryAsync<TOutput>(string commandText, object input);
        //
        // Summary:
        //     Gets the entire collection of entities queriable.
        //
        // Returns:
        //     Returns the entire collection of entities queriable.
        IQueryable<TEntity> Get();
        //
        // Summary:
        //     Gets the entity corresponding to the entityId.
        //
        // Parameters:
        //   entityId:
        //     EntityId as a primary key.
        //
        // Returns:
        //     Returns the entity corresponding to the entityId.
        TEntity Get(object entityId);
        //
        // Summary:
        //     Gets the collection of entities queriable
        //
        // Parameters:
        //   filter:
        //     Filter expression.
        //
        // Returns:
        //     Returns the collectioin of entities queriable.
        IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> filter);
        //
        // Summary:
        //     Updates the existing entity.
        //
        // Parameters:
        //   entity:
        //     Entity instance to update.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void Update(TEntity entity, bool save = true);
        //
        // Summary:
        //     Updates the existing entity asynchronously.
        //
        // Parameters:
        //   entity:
        //     Entity instance to update.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void UpdateAsync(TEntity entity, bool save = true);
        //
        // Summary:
        //     Updates the existing list of entities.
        //
        // Parameters:
        //   entities:
        //     List of entity instances to update.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void UpdateRange(IEnumerable<TEntity> entities, bool save = true);
        //
        // Summary:
        //     Updates the existing list of entities asynchronously.
        //
        // Parameters:
        //   entities:
        //     List of entity instances to update.
        //
        //   save:
        //     Value that specifies whether to save entity or not.
        void UpdateRangeAsync(IEnumerable<TEntity> entities, bool save = true);
    }
}
