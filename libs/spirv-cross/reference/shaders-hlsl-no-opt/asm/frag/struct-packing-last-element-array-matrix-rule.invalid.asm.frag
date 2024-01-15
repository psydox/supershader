struct Foo
{
    row_major float3x3 m[2];
    float v;
};

struct Bar
{
    row_major float3x3 m;
    float v;
};

cbuffer FooUBO : register(b0)
{
    Foo _8_foo : packoffset(c0);
};

cbuffer BarUBO : register(b1)
{
    Bar _11_bar : packoffset(c0);
};


static float4 FragColor;

struct SPIRV_Cross_Output
{
    float4 FragColor : SV_Target0;
};

void frag_main()
{
    FragColor = (_8_foo.v + _11_bar.v).xxxx;
}

SPIRV_Cross_Output main()
{
    frag_main();
    SPIRV_Cross_Output stage_output;
    stage_output.FragColor = FragColor;
    return stage_output;
}
