namespace Vegetables.Models.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PhieuNK")]
    public partial class PhieuNK
    {
        [Key]
        [Column(Order = 0)]
        public int MaPNK { get; set; }

        public int? MaNV { get; set; }

        [Key]
        [Column(Order = 1)]
        public DateTime NgayNhap { get; set; }

        public virtual TaiKhoan TaiKhoan { get; set; }
    }
}
