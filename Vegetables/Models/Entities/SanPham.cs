namespace Vegetables.Models.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SanPham")]
    public partial class SanPham
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SanPham()
        {
            ChiTietDDs = new HashSet<ChiTietDD>();
            ChiTietPNKs = new HashSet<ChiTietPNK>();
            ChiTietSPs = new HashSet<ChiTietSP>();
        }

        [Key]
        public int MaSP { get; set; }

        [Required]
        [StringLength(50)]
        public string TenSP { get; set; }

        public int? MaLoaiSP { get; set; }

        public int? MaTH { get; set; }

        public int SoLuong { get; set; }

        public long DonGia { get; set; }

        [StringLength(250)]
        public string MoTa { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChiTietDD> ChiTietDDs { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChiTietPNK> ChiTietPNKs { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChiTietSP> ChiTietSPs { get; set; }

        public virtual LoaiSP LoaiSP { get; set; }

        public virtual ThuongHieu ThuongHieu { get; set; }
    }
}
