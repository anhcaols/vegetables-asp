namespace Vegetables.Models.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TaiKhoan")]
    public partial class TaiKhoan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TaiKhoan()
        {
            DonDats = new HashSet<DonDat>();
            PhieuNKs = new HashSet<PhieuNK>();
        }

        [Key]
        public int MaTK { get; set; }

        [StringLength(20)]
        public string TenTK { get; set; }

        [StringLength(20)]
        public string LoaiTK { get; set; }

        [StringLength(200)]
        public string MatKhau { get; set; }

        [StringLength(12)]
        public string SDT { get; set; }

        [StringLength(50)]
        public string DiaChi { get; set; }

        public bool? GioiTinh { get; set; }

        [Column(TypeName = "date")]
        public DateTime? NgaySinh { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DonDat> DonDats { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PhieuNK> PhieuNKs { get; set; }
    }
}
