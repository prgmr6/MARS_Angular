﻿using Microsoft.AspNetCore.Cors;
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
    [EnableCors("AllowSpecificOrigin")]
    public class MARS_Breadcrumb_LinksController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        private MarsDatabase _ctx = null;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public MARS_Breadcrumb_LinksController(MarsDatabase context)
        {
            _ctx = context;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<MARS_Breadcrumb_Links> Get(string id)
        {
            return await _ctx.MARS_Breadcrumb_Links.Where(t => t.id == int.Parse(id)).SingleOrDefaultAsync();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<object> Post([FromBody]MARS_Breadcrumb_Links model)
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
                        _ctx.MARS_Breadcrumb_Links.Add(model);
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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<object> Put([FromBody]MARS_Breadcrumb_Links model)
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
                        var entityUpdate = _ctx.MARS_Breadcrumb_Links.FirstOrDefault(x => x.id == model.id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.MARS_Breadcrumbsid = model.MARS_Breadcrumbsid;
                            entityUpdate.url = model.url;
                            entityUpdate.urltext = model.urltext;
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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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
                        var idToRemove = _ctx.MARS_Breadcrumb_Links.SingleOrDefault(x => x.id == id);
                        if (idToRemove != null)
                        {
                            _ctx.MARS_Breadcrumb_Links.Remove(idToRemove);
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
