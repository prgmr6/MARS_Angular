using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities.Models;
using Msde.Mars.Repositories;
using System;
using System.Linq;
using System.Threading.Tasks;
namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/[controller]")]
    [DisableCors]
    public class MARS_QuickLinksController : Controller
    {
        #region Class fields and properties

        /// <summary>
        /// 
        /// </summary>
        private MarsDatabase _ctx = null;

        /// <summary>
        /// 
        /// </summary>
        private IHostingEnvironment _environment;

        #endregion

        #region Class methods

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public MARS_QuickLinksController(MarsDatabase context)
        {
            _ctx = context;
        }

        [DisableCors]
        [HttpGet("{id}")]
        public async Task<MARS_QuickLinks> Get(string id)
        {
            return await _ctx.MARS_QuickLinks
                            .Include(c => c.Links)
                            .Where(t => t.id == int.Parse(id)).SingleOrDefaultAsync();
        }

        [DisableCors]
        [HttpPost, Produces("application/json")]
        public async Task<object> Post([FromBody]MARS_QuickLinks model)
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
                        _ctx.MARS_QuickLinks.Add(model);
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

        [DisableCors]
        [HttpPut]
        public async Task<object> Put([FromBody]MARS_QuickLinks model)
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
                        var entityUpdate = _ctx.MARS_QuickLinks
                                                .Include(c => c.Links)
                                            .Where(t => t.id == model.id).SingleOrDefault<MARS_QuickLinks>();

                        if (entityUpdate != null)
                        {
                            entityUpdate.MARS_Pageid = model.MARS_Pageid;
                            entityUpdate.Quicklinktext = model.Quicklinktext;
                            foreach (MARS_Quicklinks_Links links in model.Links)
                            {
                                if (!entityUpdate.Links.Any(item => item.id == links.id))
                                {
                                    entityUpdate.Links.Add(new MARS_Quicklinks_Links()
                                    {
                                        url = links.url,
                                        urltext = links.urltext,
                                        MARS_QuickLinksid = entityUpdate.id
                                    });
                                }
                                else
                                {
                                    var getLinks = _ctx.MARS_QuickLinks_Links.FirstOrDefault(x => x.id == links.id);
                                    getLinks.url = links.url;
                                    getLinks.urltext = links.urltext;
                                    getLinks.MARS_QuickLinksid = model.id;
                                }
                            }
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

        // DELETE api/LinkText/5
        [DisableCors]
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
                        var idToRemove = _ctx.MARS_QuickLinks_Links.SingleOrDefault(x => x.id == id);
                        if (idToRemove != null)
                        {
                            _ctx.MARS_QuickLinks_Links.Remove(idToRemove);
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

        #endregion

    }
}
