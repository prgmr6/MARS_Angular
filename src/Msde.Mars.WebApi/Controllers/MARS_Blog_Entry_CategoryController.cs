using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Msde.Mars.Business.Entities.Models;
using Microsoft.EntityFrameworkCore;
using Msde.Mars.Repositories;
using System;

namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class MARS_Blog_Entry_CategoryController:Controller
    {
        private MarsDatabase _ctx = null;
        public MARS_Blog_Entry_CategoryController(MarsDatabase ctx)
        {
            _ctx = ctx;
        }

        // GET api/[controller]/[id]
        [HttpGet("{id}")]
        public async Task<MARS_Blog_Entry_Category> Get(string id)
        {
            return await _ctx.MARS_Blog_Entry_Category.Where(t => t.id == int.Parse(id)).SingleOrDefaultAsync();
        }

        // POST api/[controller]
        [HttpPost]
        public async Task<object> Post([FromBody]MARS_Blog_Entry_Category model)
        {
            object result = null; string message = "";
            if (model == null)
            {
                return BadRequest();
            }
            using (_ctx)
            {
                using (var _ctxTransaction = _ctx.Database.BeginTransaction())
                {
                    try
                    {
                        _ctx.MARS_Blog_Entry_Category.Add(model);
                        await _ctx.SaveChangesAsync();
                        _ctxTransaction.Commit();
                        message = "Saved Successfully";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        e.ToString();
                        message = "Saved Error";
                    }
                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }

        // PUT api/[controller]/5
        [HttpPut("{id}")]
        public async Task<object> Put([FromBody]MARS_Blog_Entry_Category model)
        {
            object result = null; string message = "";
            if (model == null)
            {
                return BadRequest();
            }
            using (_ctx)
            {
                using (var _ctxTransaction = _ctx.Database.BeginTransaction())
                {
                    try
                    {
                        var entityUpdate = _ctx.MARS_Blog_Entry_Category.FirstOrDefault(x => x.id == model.id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.MARS_Blog_Categoryid = model.MARS_Blog_Categoryid;
                            entityUpdate.MARS_Blog_Entryid = model.MARS_Blog_Entryid;
                            await _ctx.SaveChangesAsync();
                        }
                        _ctxTransaction.Commit();
                        message = "Entry Updated";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Entry Update Failed!!";
                    }
                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }

        // DELETE api/[controller]/5
        [HttpDelete("{id}")]
        public async Task<object> Delete(int id)
        {
            object result = null; string message = "";
            using (_ctx)
            {
                using (var _ctxTransaction = _ctx.Database.BeginTransaction())
                {
                    try
                    {
                        var idToRemove = _ctx.MARS_Blog_Entry_Category.SingleOrDefault(x => x.id == id);
                        if (idToRemove != null)
                        {
                            _ctx.MARS_Blog_Entry_Category.Remove(idToRemove);
                            await _ctx.SaveChangesAsync();
                        }
                        _ctxTransaction.Commit();
                        message = "Deleted Successfully";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Error on Deleting!!";
                    }
                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }
    }
}
