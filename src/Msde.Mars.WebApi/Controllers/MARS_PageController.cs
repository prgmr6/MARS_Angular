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
    public class MARS_PageController : Controller
    {
        private MarsDatabase _ctx = null;
        public MARS_PageController(MarsDatabase context)
        {
            _ctx = context;
        }

        // GET api/MainText/#PageName#
        [HttpGet("{id}")]
        public async Task<MARS_Page> Get(string id)
        {

            var page = _ctx.MARS_Page
                .Include(b => b.MARS_Crumbs)
                    .ThenInclude(c => c.Links)
                .Include(b => b.MARS_PageTexts)
                .Include(b => b.MARS_Images)
                .Include(b => b.MARS_Page_TopTexts)
                .Include(b => b.MARS_Quicks)
                    .ThenInclude(c => c.Links)
                .Where(t => t.pagename == id).SingleOrDefault<MARS_Page>();
            return page;
        }

        // POST api/values
        [HttpPost]
        public async Task<object> Post([FromBody]MARS_Page model)
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
                        _ctx.MARS_Page.Add(model);
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

        // PUT api/values/5
        [HttpPut]
        public async Task<object> Put([FromBody]MARS_Page model)
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
                        var entityUpdate = _ctx.MARS_Page.FirstOrDefault(x => x.id == model.id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.pagename = model.pagename;
                            entityUpdate.pagetext = model.pagetext;
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

        // DELETE api/values/5
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
                        var idToRemove = _ctx.MARS_Page.SingleOrDefault(x => x.id == id);
                        if (idToRemove != null)
                        {
                            _ctx.MARS_Page.Remove(idToRemove);
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
